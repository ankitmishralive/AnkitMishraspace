from app import app
from flask import render_template

@app.route('/')
def index():
    return render_template('home.html')
    # return "heyy wassup"
@app.route('/showcase')
def showcase():
    return render_template('showcase/home.html')