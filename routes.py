from app import app
from flask import render_template

@app.route('/')
def index():
    tailwindFile = "dist/css/output.css"
    return render_template('home.html')
    # return "heyy wassup"
@app.route('/showcase')
def showcase():
    tailwindFile = "dist/css/output.css"
    return render_template('showcase/home.html')

@app.route('/test')
def test():
    tailwindFile = "dist/css/output.css"
    return render_template('homeTest.html')


@app.route('/showcase/experience')
def experience():
    return render_template('showcase/experience.html')


@app.route('/showcase/projects-research')
def projects():
    return render_template('showcase/projects.html')

@app.route('/showcase/projects-research/detail')
def projectDetail():
    return render_template('showcase/projectDetail.html')


@app.route('/showcase/netcast')
def netcast():
    return render_template('showcase/blogs.html')



@app.route('/showcase//netcast/read')
def read():
    return render_template('showcase/read.html')