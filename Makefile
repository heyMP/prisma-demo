SHELL := /usr/bin/env bash
include .env
export $(shell sed 's/=.*//' .env)
USER=$(shell whoami)

start-prod:
	docker-compose up -d --build

start-dev:
	docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build

prisma-update:
	docker-compose run backend npm run prisma:update