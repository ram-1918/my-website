from flask import Flask, request, jsonify
import sqlite3
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend access

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Initialize SQLite database
DB_FILE = os.path.join(BASE_DIR, 'views.db')
# Initialize SQLite database --- brother
DB_FILE_PREE = os.path.join(BASE_DIR, 'views_pree.db')


def init_db():
    with sqlite3.connect(DB_FILE) as conn:
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS views (
                user_id TEXT PRIMARY KEY,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        conn.commit()
    # initializing DB file --- brother's
    with sqlite3.connect(DB_FILE_PREE) as conn:
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS views (
                user_id TEXT PRIMARY KEY,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        conn.commit()

init_db()

# Endpoint to track views
# http://127.0.0.1:5000/track-view
@app.route('/track-view', methods=['POST'])
def track_view():
    data = request.json
    # print(data)
    user_id = data.get('userId')

    if not user_id:
        return jsonify({"error": "User ID is required"}), 400

    with sqlite3.connect(DB_FILE) as conn:
        cursor = conn.cursor()
        cursor.execute('SELECT user_id FROM views WHERE user_id = ?', (user_id,))
        row = cursor.fetchone()

        if row:
            return jsonify({"message": "View already tracked for this user"}), 200

        cursor.execute('INSERT INTO views (user_id) VALUES (?)', (user_id,))
        conn.commit()

    return jsonify({"message": "View successfully tracked"}), 200


# Endpoint to get total view count
# http://127.0.0.1:5000/total-views
@app.route('/total-views', methods=['GET'])
def total_views():
    with sqlite3.connect(DB_FILE) as conn:
        cursor = conn.cursor()
        cursor.execute('SELECT COUNT(*) AS total FROM views')
        total = cursor.fetchone()[0]

    return jsonify({"totalViews": total}), 200


# ------------- Brother's endpoints -----------------

# Endpoint to track views
# http://127.0.0.1:5000/track-view-pree
@app.route('/track-view-pree', methods=['POST'])
def track_view_pree():
    data = request.json
    # print(data)
    user_id = data.get('userId')

    if not user_id:
        return jsonify({"error": "User ID is required"}), 400

    with sqlite3.connect(DB_FILE_PREE) as conn:
        cursor = conn.cursor()
        cursor.execute('SELECT user_id FROM views WHERE user_id = ?', (user_id,))
        row = cursor.fetchone()

        if row:
            return jsonify({"message": "View already tracked for this user"}), 200

        cursor.execute('INSERT INTO views (user_id) VALUES (?)', (user_id,))
        conn.commit()

    return jsonify({"message": "View successfully tracked"}), 200

# Endpoint to get total view count
# http://127.0.0.1:5000/total-views-pree
@app.route('/total-views-pree', methods=['GET'])
def total_views_pree():
    with sqlite3.connect(DB_FILE_PREE) as conn:
        cursor = conn.cursor()
        cursor.execute('SELECT COUNT(*) AS total FROM views')
        total = cursor.fetchone()[0]

    return jsonify({"totalViews": total}), 200



if __name__ == '__main__':
    # app.run(host='0.0.0.0', port=5000)
    app.run(debug=True, port=5001)

