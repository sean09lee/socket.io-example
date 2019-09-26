FROM node:carbon

WORKDIR /usr/local/socketio
ENV NODE_ENV=production

# If package.json has changes, run npm install
COPY package.json package.json
RUN npm install 

# Copy everything under api, except node_modules into /app
COPY . .

# Expose the port and run prdocution with node
EXPOSE 443 80
CMD [ "npm", "start" ]
