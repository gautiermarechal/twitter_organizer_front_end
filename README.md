# Twitter Organizer
This project includes three repositories

Front-End: https://github.com/gautiermarechal/twitter_organizer_front_end

Back-End: https://github.com/gautiermarechal/twitter_organizer_server

Twitter Bot: https://github.com/gautiermarechal/twitter_organizer_bot

## Description
Twitter Organizer is a twitter bot that will categorize educational tweets and threads under categories. 

The goal of this project is to avoid users spending too much time scrolling on the app, and easily have access to valuable information in a structured way. 

## Technology Used
PERN stack: Postgresql, Express, React, Node.js 

For the bot: Python, Tweepy API

## Project Structure
The project is divided into three main parts: 

1. Front-End
2. Back-End, connected to Postgresql database
3. Bot, calling Tweepy API

## How it works

1. User tags the bot with keywords `categorize <CATEGORY_NAME>` in a reply to the targeted tweet or thread.

2. The bot automatically replies, will retrieve the tweet categorized and place it in our database with its category

3. The back-end will then feed the fron-end with the categorized tweets.

4. User is now able to login and browse over categorized tweets.

## Run the project

Front-End: `npm start`

Back-End: `nodemon index`

Twitter Bot:

`source venv/bin/activate`

`python -u bot.py`
