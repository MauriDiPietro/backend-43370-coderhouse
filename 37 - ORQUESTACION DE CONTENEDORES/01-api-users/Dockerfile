FROM node
WORKDIR /app
COPY package*.json ./
# ENV MONGO_URI='mongodb://localhost:27017/coderhouse'
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]