### Dockerize the App
`Dockerfile`
```dockerfile
FROM node:10
WORKDIR usr/src/app
COPY package*.json ./
RUN npm install
# Copy local angular/nest code to the container
COPY . .
# Build production app
RUN npm run build:ssr
CMD ["npm", "run", "serve:ssr"]
```
### Register the Container on GCP
`>_ command line`
```shell script
gcloud config set project <PROJECT_ID>
gcloud builds submit --tag gcr.io/PROJECT_ID/nest-angular-ssr
```

### Connect to Firebase
Connect your Cloud Run service to Firebase hosting.

`>_ command line`
```shell script
firebase init hosting
firebase deploy --only hosting
```

`firebase.json`
```json 
{
  "hosting": {
    "public": "dist/browser",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [ 
      {
        "source": "**",
        "run": {
          "serviceId": "nest-angular-ssr",
          "region": "us-central1" 
        }
      }
    ]
  }
}
```
