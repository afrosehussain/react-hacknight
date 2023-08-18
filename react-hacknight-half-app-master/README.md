# Assignment: HacKnight - React Getting Started

React HacKnight app getting started.

![](https://raw.githubusercontent.com/ZakiMohammed/react-hacknight-half-app/master/banner.png)

## Problem Statement

A client has a requirement to create a HacKnight App which will allow participants to register them selves in an upcoming Hackathon event. 

The app will show the details of HacKnight in the home page. The app will also have a registration form where participants can register. Once filled the form the participants can see their name in the participants list page. The app will also come up with About and FAQ page. In case of any random route user will navigated to not found page. 

For the backend consider using json-server.

Pages:

- Home (Banner)
- Register
	- Full Name
	- Email
	- Country
	- GitHub Link
- Participants
- About
- Not Found

## Run Application
```
npm run dev
```

## Initial Setup

```
npm create vite@latest
# project name: hacknight
# framework: react
# variant: JavaScript + SWC

cd hacknight
npm i
npm run dev
```

## Add Dependencies

```
npm i bootstrap
npm i bootswatch

npm i uuid

npm i react-icons
npm i react-router-dom
npm i axios
```