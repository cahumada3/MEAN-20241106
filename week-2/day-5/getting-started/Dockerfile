#In order to build our container image, we need to use a DockerFile

#Since we're running a node.js application, we need to have a node base image
FROM node:20-alpine

#create a working directory for our container to work out of
WORKDIR /app

#copy the file into the current directory /app
COPY app .

#will install and create a yarn.lock file
RUN yarn install --production

#starts up our node application
CMD ["node", "./src/index.js"]

#expose port we want our app to listen on
EXPOSE 3000

