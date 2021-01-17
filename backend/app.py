import os
from flask import Flask, request, jsonify
from flask.helpers import send_file, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename

from pdfcheck import modify

app = Flask("__main__")
CORS(app)

app.config["UPLOAD_FOLDER"] = "uploads/"

if not os.path.exists('uploads'):
    os.makedirs('uploads')

ALLOWED_EXTENSIONS = set(['pdf'])

def allowed_file(filename):
	return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/recruiter/api', methods=['POST'])
def upload_file():
	# check if the post request has the file part
	if 'file' not in request.files:
		print(request.files)
		resp = jsonify({'message' : 'No file part in the request'})
		return resp, 400

	file = request.files['file']

	if file.filename == '':
		resp = jsonify({'message' : 'No file selected for uploading'})
		return resp, 400
	if file and allowed_file(file.filename):
		filename = secure_filename(file.filename)
		file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
		modify(os.path.join(app.config['UPLOAD_FOLDER'], filename))
		return send_from_directory(os.path.join(os.getcwd()),'results.txt')
	else:
		resp = jsonify({'message' : 'Allowed file types are pdf'})
		return resp, 400

if __name__ == "__main__":
    app.run(debug=True)