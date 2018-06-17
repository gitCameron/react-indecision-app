

# Setup
1.  Need a text editor such as Visual Studio Code, Sublime, or Atom
2.  Install Node at nodejs.org (Node is javascript on the server).  You can now use npm (Node Package Manager)
3.  Install yarn (another package manager) using npm &rarr; npm install -g yarn
4.  yarn global add live-server &rarr; allows you to run live-server + path to index.html.  For this project it is live-server public
5.  Babel is a javascript compiler.  To install globally &rarr; yarn global add babel-cli@\<version> 
6.  Install Babel presets:  
    * yarn init
    * Answer all questions
    * yarn add babel-preset-react@\<version> babel-preset-env@\<version>
7.  Run Babel:   
    * babel src/app.js --out-file=public/script/app.js --presets=env,react
8.  Create a Watch:  
    * babel src/app.js --out-file=public/script/app.js --presets=env,react --watch
