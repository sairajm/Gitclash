import schedule
import time

schedule.every().day.at("00:00").do(logic.calculate_score())
schedule.every(7).day.at("00:00").do(logic.calculate_score())


while True:
    schedule.run_pending()
    time.sleep(1)