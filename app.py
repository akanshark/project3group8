import sqlite3
import numpy as np
from flask import Flask,jsonify
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine


engine=create_engine("sqlite:///Dow.sqlite")


# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Save reference to the table --> THIS LINE CAUSES ERROR
#Dow = Base.classes.Dow

# flask setup
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



@app.route('/api/v1.0/profile')
def profile(start):

    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all long business profiles for tickers"""
    # Query all profiles
    #results = session.query(stock_data.longBusinessSummary).all()
    results = session.query(stock_data.longBusinessSummary).all()

    session.close()
    businessprofiles = results

    return jsonify(businessprofiles)




# @app.route('/api/v1.0/table')
# def table():

#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     """Return a list of dictionaries for the values which will be in our table"""
#     # Query all table data
    
#     results = session.query(Dow.Ticker, Dow.MarketCap, Dow.FiftyTwoWeekHigh, Dow.EarningsPerShare, Dow.PE_Ratio, Dow.DividendYield, Dow.GrossProfitMargin, Dow.NetIncome, Dow.BookValuePerShare, Dow.TotalDebt, Dow.CurrentRatio, Dow.DebtToEquityRatio).all()

#     session.close()

#     table = []
#     for Ticker, MarketCap, FiftyTwoWeekHigh, EarningsPerShare, PE_Ratio, DividendYield, GrossProfitMargin, NetIncome, BookValuePerShare, TotalDebt, CurrentRatio, DebtToEquityRatio in results:
#         table_dict = {}
#         table_dict["Ticker"] = Ticker
#         table_dict["MarketCap"] = MarketCap
#         table_dict["FiftyTwoWeekHigh"] = FiftyTwoWeekHigh
#         table_dict["EarningsPerShare"] = EarningsPerShare
#         table_dict["PE_Ratio"] = PE_Ratio
#         table_dict["DividendYield"] = DividendYield
#         table_dict["GrossProfitMargin"] = GrossProfitMargin
#         table_dict["NetIncome"] = NetIncome
#         table_dict["BookValuePerShare"] = BookValuePerShare
#         table_dict["TotalDebt"] = TotalDebt
#         table_dict["CurrentRatio"] = CurrentRatio
#         table_dict["DebtToEquityRatio"] = DebtToEquityRatio

#         table.append(table_dict)

#     return jsonify(table)

# @app.route('/api/v1.0/chart')
# def chart():
#     session = Session(engine)

#     """Return a list of all dates for tickers"""
#     # Query all dates
#     results = session.query(Dow).all()

#     session.close()
#     dates = results[3:270]

#     return jsonify(dates)
 


if __name__ == "__main__":
    app.run(debug=True)