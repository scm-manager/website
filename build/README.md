# build

This folder contains the build instructions for the scmmanager/node-build images.
We have to build our own nodejs image, because we need git with `sparse-checkout` and the git versions in the pre-build nodejs images are too old.
