#/bin/bash

#upload files
aws s3 cp ./dist/swe645assignment4 s3://sweassignment4 --recursive --acl public-read
