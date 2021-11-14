# 5007-Tutorial6 Hotel California Waitlist System in Mobile
#### Name: Liu linxi
#### Student Number:A0228591X

## Part I. Backup Environment(same as Tutorial5) 
#### 1. ubuntu 
```
docker pull ubuntu
```
#### 2. run the container with port 3000 and port 5000 
```
docker run -p 3000:3000 -p 5000:5000 -dit ubuntu
```
#### 3. install nvm and npm
```
apt update
```
```
apt install curl
```
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
``` 
#### 4. restart the container and do the following
```
nvm install 10
```
```
npm install -g npm@6
```

#### 5. mongodb installation
```
apt install gnupg
```
```
apt install curl
```
```
curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -
```
```
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list 
```
```
apt update
```
```
apt install mongodb-org
```
```
apt install screen
```
```
mkdir -p /data/db
```
```
screen mongod
```
###### press Ctrl+a followed by d to return to terminal


## PartII.  Setup for my tutorial6

#### 1. git repository
clone from my git repository 

  ```
  git clone https://github.com/irissky/tut6.git
  ```

#### 2. Approach to run Android frontend
###### Approach1:(recommend) 
Run in the "frontend" folder I uploaded on the Luminus.
You can run it under the "frontend" file using commands:
```
react-native run-android
```

###### Approach2:
Use the files on GitHub
you need to
- create react-native project at your own side 
- copy the files I provided to your project
- install the dependencies and run
      
#### 3. Some Tips

##### 3.1 The function I realized is `Add customers to the waitlist DB through the mobile interface`.

##### 3.2 The server runs at `port 5000`.


##### 3.3 Do not forget to replace 192.168.1.4 with your own IP address in frontend/App.js:  

  ```
  const client = new ApolloClient({ uri: 'http://192.168.1.4:5000/graphql' });
  ```

##### 3.4 your input should satisfied the following:

  - Both name and phone number should be filled in.

  - The phone number should only have numbers. 

  - Cannot add an appointment that already exists in the database.
  


## Part III.  Commands

### Running backend (in Docker)

#### 1. install the dependencies

```
cd backend
```
```
npm install
```
#### 2.  start the mongodb

```
screen mongod
```
Press Ctrl+a followed by d to return to terminal


#### 3.initialize the database and run the backend [in folder "backend"]

```
mongo issuetracker scripts/init.mongo.js
```
```
screen npm start
```
Press Ctrl+a followed by d to return to terminal
### Running frontend 
#### 4. Running Android frontend [in windows folder "frontend"]
##### Approach1. 
If you use the frontend folder I uploaded on Luminus, just open the frontend folder in your windows command prompt terminal and run the following command.

  ```
  react-native run-android
  ```
##### Approach2.
If you pull and use the frontend folder from my GitHub.
##### step1. Run the following commands to create a react-native project first.

  ```
  npx react-native init SampleApp
  ```
  
##### step2. Enter the "SampleApp" folder, and copy the files you download in folder "frontend"  to "SampleApp".
##### step3. Open  folder "SampleApp" in your windows command prompt terminal, and run the following to start.
  
  ```
  npm install
  ```
  ```
  react-native run-android
  ```
  
  

## PartIV.  Test from browser

#### 1.open **`localhost:5000/graphql`** in your browser and you can test the addition.

#### 2. commands to test the addition

  ```
  query{issueList{id, name, phone, time}}
  ```


