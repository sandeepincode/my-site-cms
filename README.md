# my-site-cms
This application is what powers sandeepincode.com, it uses server side 
rendering and the contentful api.

## How to run:
1. Fill in the credentials in server.js, it asks for SPACE_ID and the ACCESS_TOKEN which 
are found once you create a space in contentful.
2. Content models:
 - name: about, <br/>
 content type ID: home <br/>
 fields[ Text(long text): description ]
 
 - name: Blog <br/>
 content type ID: blog  <br/>
 fields[ Text(short text): Title, Date&Time: Date, Integer: Ranking, Text(Long Text): Content, Text(Short Text): description ]
 
 - name: Github <br/>
 content type ID: github <br/>
 fields[ Text(short text): name, Text(long text): description, Text(short text): url, Date&Time: date ]
 
 - name: Projects <br/>
 content type ID: projects <br/>
 fields[ Text(short text): name, Text(short text): url, Text(long text): description, Date&Time: started]
 
 3. Make some content in the content tab in contentful.
 4. npm i 
 5. npm run dev
 
 <br/>
 Regards,
 Sandeepincode.
