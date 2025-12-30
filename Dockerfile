# ---------- FRONTEND BUILD ----------
FROM node:20.19.5 AS frontend

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend ./
RUN npm run build



# ---------- BACKEND BUILD ----------
FROM node:20.19.5 AS backend

WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm install


COPY backend ./


COPY --from=frontend /app/frontend/dist ./dist




FROM node:20.19.5

WORKDIR /app


COPY --from=backend /app/backend ./

EXPOSE 5000

CMD ["node", "index.js"]
