# Import the dependencies.
import numpy as np
import datetime as dt

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func
from flask import Flask,jsonify
print('x')

#################################################
# Database Setup
#################################################
# Create a connection to database
engine=create_engine("sqlite:///Dow.sqlite")

inspector= inspect(engine)

#inspector.get_table_names()
print(inspector.get_table_names())

# reflect an existing database into a new model
Base=automap_base()
# reflect the tables
Base.prepare(autoload_with = engine)

# Save references to each table
# From Jupyter Notebook we know there are two tables fundamental and historical
#Fundamental = Base.classes.fundamental
Historical = Base.classes.historical

print(Base.classes.keys())

# Create our session (link) from Python to the DB


#################################################
# Flask Setup
#################################################
app = Flask(__name__)


@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/profile<br/>"
        f"/api/v1.0/table"
        f"/api/v1.0/chart"
    )



@app.route('/api/v1.0/chart')
def profile(start):

    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all data for tickers"""
    # Query all price data
    #results = session.query(stock_data.longBusinessSummary).all()
    data = session.query(Historical.Ticker.Price).all()

    session.close()
    
    all_price = list(np.ravel(data))

    return jsonify(all_price)



if __name__ == "__main__":
    app.run(debug=True)