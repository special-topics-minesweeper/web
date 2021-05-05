#! /bin/bash
# exit script when any command ran here returns with non-zero exit code
set -e
COMMIT_SHA1=$TRAVIS_COMMIT

# We must export it so it's available for envsubst
export COMMIT_SHA1=$TRAVIS_COMMIT

curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
chmod u+x ./kubectl
echo "$KUBERNETES_CLUSTER_CERTIFICATE" | base64 --decode > cert.crt


# now mapping branches to namespaces in k8s
# since we got staging namespace for master branch so setting that in variable
if [[ $TRAVIS_BRANCH == "main" ]]
then
  k8s_namespace=production
else
  k8s_namespace=$TRAVIS_BRANCH
fi
# lower case name needed for kubernetes secrets name
GIT_REPO_NAME_LC=$(echo $GIT_REPO_NAME | tr "[:upper:]" "[:lower:]")
# create/update secrets
# https://stackoverflow.com/a/45881259/2037323
./kubectl --kubeconfig=/dev/null \
  --server=$KUBERNETES_SERVER \
  --certificate-authority=cert.crt \
  --token=$KUBERNETES_TOKEN \
  create secret generic "v4-secrets-$GIT_REPO_NAME_LC" \
  --from-env-file=./dev/$k8s_namespace/$GIT_REPO_NAME/.env \
  --dry-run -o yaml \
  --namespace=$k8s_namespace | \
  ./kubectl --kubeconfig=/dev/null \
  --server=$KUBERNETES_SERVER \
  --certificate-authority=cert.crt \
  --token=$KUBERNETES_TOKEN \
  apply --namespace=$k8s_namespace -f -
# since the only way for envsubst to work on files is using input/output redirection,
#  it's not possible to do in-place substitution, so we need to save the output to another file
#  and overwrite the original with that one.
envsubst <./dev/deployment.$k8s_namespace.yml >./dev/deployment.yml.out
mv ./dev/deployment.yml.out ./dev/deployment.$k8s_namespace.yml

./kubectl \
  --kubeconfig=/dev/null \
  --server=$KUBERNETES_SERVER \
  --certificate-authority=cert.crt \
  --token=$KUBERNETES_TOKEN \
  apply -f ./dev/deployment.$k8s_namespace.yml --record