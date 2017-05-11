
#How to run it:

You must have an local server installed on your pc (apachee, XAMPP etc,).i have used XAMPP for local server.

If you dont have any server downdload Xampp and after installing it,go to XAMPP control panel, click on ‘Start’ under ‘Actions’ for the Apache module. This instructs XAMPP to start the Apache webserver.

Then Save these files in c:\xampp\htdocs\ (or whichever directory you installed XAMPP in).

Navigate to http://localhost/index.html or 127.0.0.1 in your web browser. You should see the website.

#How to name images for slideshow:

Add as many as images you like but the names should follow the naming convention like ("slide1,slide2,slide3,......,sliden).

#How to add contents of text files:

The textfiles should be in similar format

#For Solution Part(solution.txt):

Paragraph:01
Title: 
Description: 
List:

#For Platform Part:

For the textpart(platform.txt):

Paragraph:01
Title: PLATFORM
Description:

And for the platform columns(3 columns fixed)(platform_part.txt):

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

#For About Part:

For the textpart(about.txt):

Paragraph:01
Title: ABOUT
Description:

And for the about rows(add as many rows as user want but maintain the format)(about_part.txt):
The format should be in such a way :

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

#Constants:
1)Filenames should be same.
2)textfiles format should be same such as : first paragrph then title,image. description etc.
3)content of slideshow.txt should be same.

#Users can change:

1)names of Title, Image ad Description
2)Pargarph numbers should be sequential.

#Issues:
1)Users cant delete any files. If deleted,that content won't be loaded on website.
2)issue with mail system as 3rd party is used.
