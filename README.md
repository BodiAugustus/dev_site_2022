Commits
#1 - initial commit. Setup and tailwig config.


#2. created components folder. Created Navbar.jsx. Setup initial Navbar component. Created Footer.jsx and created initial Footer component. Created Loader.jsx and initial Loader component. Created Showcase.jsx and setup initial Showcase component. Created Transactions.jsx and setup initial Transactions component. Created Hero.jsx and setup initial Hero component. Created Services.jsx and setup initial Services component. Created ImgBox.jsx and setup initial component. Created BookBox.jsx and setup intial component. Setup Form.jsx and initial component. After the initial components were created I created index.js file and exported each component from that file.

#3. Imported in the Navbar, Hero, Showcase, Skills, Services and Footer components into index.js. Forgot to make Skills.jsx so made that and setup initial component then added to the index.js export file. Created _document.js and setup according to NextJS documentation to allow Google Fonts import. Added a head component with a title to pages/index.js.

#4. Installed npm react-icons package. Imported two react icons for the open/close menu bar. Created a photos folder inside of public folder. Brought in a logo and imported it to the Navbar component after compressing. Installed npm ethers package for blockchain manipulation. Imported useRouter inside the Navbar and used it to push to sprucey.dev when the logo is clicked. 

#5. Created the NavItem component and inserted into the Navbar component. Mapped over an array of made up links to populate the navbar for non-mobile. For mobile set up a useState, toggleMenu, to monitor if the menu is toggled to open or close. Setup conditional rendering of the menu buttons depending on useState value. Laid out basic structure of navigation and open/close menu functionality.