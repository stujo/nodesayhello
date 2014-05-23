node.js Hello World Web App
=================



#Installing Node.js

    $ brew doctor
    $ brew install node

I already had node.js installed so:

    Error: node-0.10.21 already installed
    To install this version, first `brew unlink node'
    $ brew unlink node
    Unlinking /usr/local/Cellar/node/0.10.21... 1280 symlinks removed

Trying again

    $ brew install node
    ==> Downloading https://downloads.sf.net/project/machomebrew/Bottles/n...

#Installing npm

__npm__ : Node Package Manager

I was able to access npm directly after installing node, although some sites report
that a separate install is required

    $ npm -v
    1.4.11


#Creating our Project

In our projects directory:

    $ mkdir nodesayhello
    $ cd nodesayhello

Create a ```package.json``` file:

    {
      "name": "nodesayhello",
      "version": "0.0.1",
      "description" : "My first Node.js Web Application",
      "homepage" : "https://github.com/stujo/nodesayhello",
      "keywords" : ["hello world"],
      "author" : "Stujo https://github.com/stujo/",
      "main" : "nodesayhello.js",
    }

What is ```package.json```?

All npm (node package manager) package contain this file, it specifies the name and the ```main``` file
which will be run when the package is required


#MVP - Say Hello!

Create the file ```nodesayhello.js```:

    console.log('Hello World');

Run the file:

    $ node nodesayhello.js

    Hello World

#Setting up a Web Server

## Using Express

The express framework seems popular:

* [http://expressjs.com/](http://expressjs.com/)

Update the ```package.json``` file to depend on express:

    {
      "name": "nodesayhello",
      "version": "0.0.1",
      "description" : "My first Node.js Web Application",
      "homepage" : "https://github.com/stujo/nodesayhello",
      "keywords" : ["hello world"],
      "author" : "Stujo https://github.com/stujo/",
      "main" : "nodesayhello.js",
      "private": true,
      "dependencies": {
        "express": "3.x"
      }
    }


Install the new dependencies:

    $ npm install

Output:

    express@3.8.0 node_modules/express
    ├── parseurl@1.0.1
    ├── merge-descriptors@0.0.2
    ├── cookie@0.1.2
    ├── debug@0.8.1
    ├── cookie-signature@1.0.3
    ├── range-parser@1.0.0
    ├── fresh@0.2.2
    ├── methods@1.0.0
    ├── buffer-crc32@0.2.1
    ├── send@0.3.0 (debug@0.8.0, mime@1.2.11)
    ├── mkdirp@0.5.0 (minimist@0.0.8)
    ├── proxy-addr@1.0.0 (ipaddr.js@0.1.2)
    ├── commander@1.3.2 (keypress@0.1.0)
    └── connect@2.17.1 (response-time@1.0.0, method-override@1.0.1, connect-timeout@1.1.0, pause@0.0.1, vhost@1.0.0,
        qs@0.6.6, on-headers@0.0.0, basic-auth-connect@1.0.0, bytes@1.0.0, morgan@1.1.1, serve-favicon@2.0.0,
        errorhandler@1.0.1, serve-static@1.1.0, cookie-parser@1.1.0, type-is@1.2.0, body-parser@1.2.0,
        csurf@1.2.0, compression@1.0.2, express-session@1.2.0, serve-index@1.0.3, multiparty@2.2.0)

This also creates the folder ```node_modules``` in the project

Question: Should I add ```node_modules``` to ```.gitignore```

https://www.npmjs.org/doc/faq.html#Should-I-check-my-node_modules-folder-into-git

So __NO__ not for our web app, we should check in the dependencies
