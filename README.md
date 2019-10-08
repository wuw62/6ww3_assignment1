Two developer:

Tianyuan Zhang
Std#: 400278995

Weiyi Wu
Std#: 400224662


This is a simple web project for COMPSCI 6WW3 assignment 1.

A easy way to browser our website is using my domain name:

www.midwinter.work/6ww3_assignment1

This is on aws.

Name of this website is "allUsee".
You can find different entertainment places as well as their reviews using our website.
You can even upload your own entertainment places on the submission page.

What we have:
 1. You can attach image and videos to introduce your submitted places.
 2. Thanks to HTML <picture> and <source> tag, for each submitted place, it's picture has two versions (small version and high-dpi version), which picture will be shown to users depends on the device user uses. Our website's logo, background and map sample are all have different versions as well.
 3. We have a mobile friendly version using different CSS file which has been set up by using HTML5 responsive functions.
 4. we have links to social media sites for users to share the places with their friends.

 For add-on task 2, below are the answers for the brief questions:
 i. Since user may use different devices to browser our website, different version of pictures are necessary, for example, if a user is using a mobile phone, a smaller pic is required for them to reduce data usage and also since mobile screen is smaller, we don't need to provide a very high quility pic, it can also save some loading time. That's why we have two versions of image (one has smaller number of pixels and another has larger). Example:
    <picture>
            <source media="(min-width: 1200px)" srcset="Steel_City_Billiards1_2x.png">
            <source media="(max-width: 1200px)" srcset="Steel_City_Billiards1.png">
            <img src="Steel_City_Billiards1_2x.png" alt="Image_of_Steel_City_Billiards1" style="width:auto;">
    </picture>
    Our web page will choose the normal image if screen width is smaller than 1200px.
    Our web page will choose the 2x image if screen width is larger than 1200px.

 ii. For 3 poitive goals, like I mentioned above, it can help user save data usage; It can help accelerate loading speed if using a smaller screen; It can also help developers to build up a responsive webpage, because they can use this feature to fit in different screen size.

 iii. The down side of using <picture> and <source> tags is that when you implement these tags, you have made a rule for the browser to follow, which is less flexible, since user may want to see high quility image on their phone. To avoid this problem, you can either stop using these tags or use javacript to create some kind of listener that listen to browser or users' requirement.

