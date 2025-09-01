<p align="center">
  <img src="icon.png" alt="Project Logo" width="21%">
  <BR>
  AlpacaRMS v2.2.0.0 - Retail Management System and Point of Sale
</p>
# "AlpacaRMS - Retail Management System and Point of Sale"

## 👋 Introduction

```
AlpacaRMS is a web-based retail management system and point of sale system. 
The application is written in PHP, javascript and uses MariaDB(mysql) as data storage back-end.
The interface is simple but intuitive.

## Features

- Sales register with transaction logging
- Integrated Bitcoin on Lightning Network payments via LNBits and BTC Pay Server.
- Integrated Credit Cards payments via Blockchyp (preferred):
  - Apply here for Blockchyp Payments: https://dashboard.blockchyp.com/?inviteCode=2JHNMUBT4RKLOKNR3PBOJSC4AY
- Multi-location Stock management (items and kits with an extensible list of attributes)
- Consignment Sales and Check Printing Payouts
- Quickbooks Online Integration
- VAT, GST, customer, and multi tiers taxation
- Quotes, Work Orders and Invoicing
- Shipping with EasyPost
- Expenses logging
- Cash Drop function
- Printing and emailing (via Sendgrid) of receipts, invoices and quotations
- Barcode generation and pricetag printing
- Database of customers and suppliers
- Multiuser with role permission control
- Reporting on summary and detail sales, orders, expenses, inventory status and more
- Inventory Receiving
- Gift Cards via Blockchyp
- Gift Certificates (preprinted store bought, and system generated gc#'s)
- Customer Rewards
- Restaurant tables, To-Go and Delivery settings
- Gratuity/Tips function
- Messaging (SMS) to customers on order status (add-on thru Twilio)
- Multilanguage capable (English and Spanish support), others available but not supported/updated currently
- Mailchimp integration
- Optional Google reCAPTCHA or Cloudflare Turnstile to protect login page from brute force attacks
- GDPR ready

## LICENSE
Please review the [LICENSE](LICENSE.md) file for the license description.

## Value 4 Value
A lot of work went into making this software available to the Bitcoin community.  
Show some love with some sats: 

OnChain:  bc1q9xpjedhs5nst7529c8mvrwnu5hsxtvs5ww2985

Lightning Bolt12: lno1pg89xct5daeks62jf4fjq4352ctzzqsza9lc5drelcy93h0628w3p9ga9tgjw2eqz9dt5qz2e2vp83v7vs

Phoenix is a bolt12 wallet. It may take a couple times to find a payment route, please be patient.

More options at [AlpacaRMS](https://alpacarms.org)

## Dependencies
-Requires MariaDB:10.5 and Apache2 and PHP 7.4.  But this is all in the container.

The following logs are normal.  **Do not try to login to the app until you see "NOTICE: ready to handle connections"**:
```

Starting MySQL server...
Waiting for MySQL to start...
2503 14:16:49 mysqld_safe Logging to '/var/log/mysql/error.log'.
250513 14:16:49 mysqld_safe Starting mariadbd daemon with databases from /var/lib/mysql
Waiting for MySQL to start...
Waiting for MySQL to start...
Waiting for MySQL to start...
Waiting for MySQL to start...
Waiting for MySQL to start...
MySQL server is ready.
Initializing database...
Database initialization complete.
Starting Apache server...
Starting PHP-FPM...
[13-May-2025 14:18:41] NOTICE: fpm is running, pid 129
[13-May-2025 14:18:41] **NOTICE: ready to handle connections**

```
Bring up a web browser (Chrome and Firefox are best).
Go to: http:/localhost:80 (or the port you entered).
The AlpacaRMS login will appear.
You will login to upgrade the system, then login a second time to access the system as normal.

👤 Username `admin`

🔒 Password `alpacapassword`

Adminer access to the database (Admin menu > Adminer):

👤 Database Username `alpacadbadmin`

🔒 Database Password `alpacapassword`

Database Name: alpacarms

## Configuration
Once up and running, first thing is to set all your site configurations in the Office > Config menu.
Review the AlpacaRMS StartUp post at [AlpacaRMS](https://alpacarms.org). It is pinned at the top.
Configuration is handled within the software in ENVVARS accessible in the Office Config menu.


## Reporting Issues
AlpacaRMS has community support via github for issue submissions, and the AlpacaRMS website for how-to documentation.

Find out more at [AlpacaRMS](https://alpacarms.org)

##  Done
