import sqlite3
import numpy as np
from flask import Flask,jsonify
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine


engine=create_engine("sqlite:///Dow.sqlite")



app = Flask(__name__)



@app.route('/api/v1.0/profile')
def profile():

    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all profiles for tickers"""
    # Query all profiles
    results = session.query(stock_data.longBusinessSummary).all()

    session.close()



   

    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)