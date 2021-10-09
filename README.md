# Pointy
A real-time 'pointing poker' app!

# Quick Start
### Run without Docker

Pointy consists of two parts; a client and a server.  To run without Docker, both need to be built and combined.  The script in `/bin/build` handles the build, and the script in `/bin/start` starts the application.  For convenience a `package.json` has been included in the root of the repository to run these scripts, so to start the app you can just do:

```
npm run start
```

### Run with Docker

Build the container image with:

```
docker build -t pointy .
```

Then start it with:

```
docker run -d -p 3000:3000 pointy
```

Point your browser to http://localhost:3000 to view!