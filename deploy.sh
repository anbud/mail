#!/bin/sh

echo Path to Meteor project...
METEOR_DIR="$1"
echo $METEOR_DIR
echo Path to your gear repo...
OPENSHIFT_REPO_DIR="$2"
echo $OPENSHIFT_REPO_DIR

echo Cleaning up previous deployments...
cd $OPENSHIFT_REPO_DIR
rm -Rf bundle

echo Building Node app from Meteor...
cd $METEOR_DIR && cmd //c meteor build $OPENSHIFT_REPO_DIR --directory --server-only


# Add all and deploy
echo Deploying to Openshift...
cd $OPENSHIFT_REPO_DIR && git add . && git commit -am "%DATE% %TIME%"
git push
