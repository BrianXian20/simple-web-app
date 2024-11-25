# Step 1: Use an official lightweight Python image
FROM python:3.9-slim

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy backend code and static files
COPY backend/ /app/
COPY frontend/ /app/static/

# Step 4: Install dependencies
RUN pip install flask

# Step 5: Expose the application port
EXPOSE 5000

# Step 6: Command to run the application
CMD ["python", "app.py"]
