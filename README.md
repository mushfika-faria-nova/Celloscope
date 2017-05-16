# Celloscope

A website for Celloscope made with HTML5, CSS3 and javascript.

## Getting Started

You must have an local server installed on your pc (apachee, XAMPP etc,).

If you dont have any web server, downdload Apchee server and after installing it,go to XAMPP control panel, click on ‘Start’ under ‘Actions’ for the Apache module. This instructs XAMPP to start the Apache webserver.

Then Save these files in c:\xampp\htdocs\ (or whichever directory you installed XAMPP in).

or downdload apache manually from this site, https://www.sitepoint.com/how-to-install-apache-on-windows/ 
and run the local server to host the website.


### Running the tests

Navigate to http://localhost/Celloscope/workspace/src/Celloscope/index.html or the path where the index.html file is, in your web browser. You should see the website.

Built With
1) HTML5
2) CSS3
3) Javascript

## Description 

Here is a small description of the website. ita has a fixed nav bar with a search button. on enter key press 

the search function highlights all the matching strings of the page.

Then we have solution part, platform part, about part, gallery and last contact form to send messages.

On resize a toggle bar appeares on the navbar to open left  navbar. 

All the contents of the web page are read from textfiles.

## How to name images for slideshow

Add as many images as you like in the images>Slideshow folder  but the names should follow the naming convention like 
("slide1,slide2,slide3,......,sliden).

## How to add contents of text files

The textfiles should be in similar format

## For Solution Part(solution.txt)

Paragraph:01

Title: 

Description: 

List:

## For Platform Part

For the textpart(platform.txt)

Paragraph:01

Title: PLATFORM

Description:

And for the platform columns(3 columns fixed)(platform_part.txt)

Paragraph:01

Title: 

Image: 

Description: 

Paragraph:02

Title: 

Image: 

Description: 

Paragraph:03

Title:

Image:  

Description:

## For About Part

For the textpart(about.txt)

Paragraph:01

Title: ABOUT

Description:


And for the about rows(add as many rows as user want but maintain the format)(about_part.txt)

The format should be in such a way 

Paragraph:01

Title: 

Image: 

Description: 

Paragraph:02

Title: 

Image: 

Description: 

Paragraph:03

Title: 

Image: 

Description:
......

.....

.....

Paragraph:

Title: 

Image:  

Description:


## Constants

1)Filenames should be same.

2)Textfiles format should be same such as : first paragrph then title,image. description etc.

3)Content of slideshow.txt should be same.

## Users can change

1)Names of Title, Image and Description

2)Pargarph numbers should be sequential.

## Issues

1)Users cant delete any files. If deleted,that content won't be loaded on website.

2)Issue with mail system as 3rd party is used.

