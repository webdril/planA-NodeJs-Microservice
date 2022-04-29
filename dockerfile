FROM node:latest


RUN useradd nonroot

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

#Run Container as nonroot
USER nonroot

CMD ["node", "index.js"]
