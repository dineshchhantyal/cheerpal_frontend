<h1 align="center">
  <br>
  CheerPal!
  <br>
</h1>

<h4 align="center">
 your go-to companion for spreading joy and ensuring you never miss a special celebration again!
</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## Key Features

- Timely Reminders: CheerPal! will remind you of upcoming birthdays, anniversaries, and other special occasions so you never miss a chance to spread joy!
- Personalized Greetings: CheerPal! will help you craft the perfect message for your loved ones, ensuring that your wishes are always heartfelt and sincere.
- Customizable: CheerPal! allows you to add and edit your own special occasions, ensuring that you never miss a chance to celebrate the people you love.
- Birthday Sync: CheerPal! will automatically sync with your contacts and calendar to ensure that you never miss a birthday again.
- Find your Twin: CheerPal! will help you find your birthday twin and connect with them to spread joy and make new friends!
- Effortless Coordination: Simplify event planning and coordination, allowing you to focus on the joy of the celebration while CheerPal takes care of the details.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/dineshchhantyal/cheerpal_frontend

# Go into the repository
$ cd cheerpal_frontend

# Copy .env.example to .env
$ cp .env.example .env

# Update the .env file with your own values

# Docker setup
$ docker-compose up -d

# Run the Prisma migration
$ yarn migrate

# Generate Prisma client
$ yarn generate

# Seed the database
$ yarn prisma db seed

# Install dependencies
$ yarn install

# Run the app
$ yarn dev

# Open the app in your browser
http://localhost:3000

```

> **Note**
> default email: `admin@admin.com`, password `password123` for login as part of @prisma/seed.ts
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)

## License

MIT
