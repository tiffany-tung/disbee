web: /bin/bash -c '(nohup ssh -n -i compose-heroku-key -o StrictHostKeyChecking=no \ -N compose@aws-us-east-1-portal.2.dblayer.com -p 10724 -L localhost:28015:10.58.112.2:28015  &); node server.babel.js'

