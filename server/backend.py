from flask import Flask, request, json

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello():
    return "Hello", 200, {'Content-Type': 'text/css; charset=utf-8'}



app.secret_key = 'some key that you will never guess'
#Run the app on localhost port 5000
#debug = True -> you don't have to restart flask
#for changes to go through, TURN OFF FOR PRODUCTION
if __name__ == "__main__":
    app.run('0.0.0.0', 5000, debug=False, threaded=True)