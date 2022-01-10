Commits
#1 - initial commit. Setup and tailwig config.


#2. created components folder. Created Navbar.jsx. Setup initial Navbar component. Created Footer.jsx and created initial Footer component. Created Loader.jsx and initial Loader component. Created Showcase.jsx and setup initial Showcase component. Created Transactions.jsx and setup initial Transactions component. Created Hero.jsx and setup initial Hero component. Created Services.jsx and setup initial Services component. Created ImgBox.jsx and setup initial component. Created BookBox.jsx and setup intial component. Setup Form.jsx and initial component. After the initial components were created I created index.js file and exported each component from that file.

#3. Imported in the Navbar, Hero, Showcase, Skills, Services and Footer components into index.js. Forgot to make Skills.jsx so made that and setup initial component then added to the index.js export file. Created _document.js and setup according to NextJS documentation to allow Google Fonts import. Added a head component with a title to pages/index.js.

#4. Installed npm react-icons package. Imported two react icons for the open/close menu bar. Created a photos folder inside of public folder. Brought in a logo and imported it to the Navbar component after compressing. Installed npm ethers package for blockchain manipulation. Imported useRouter inside the Navbar and used it to push to sprucey.dev when the logo is clicked. 

#5. Created the NavItem component and inserted into the Navbar component. Mapped over an array of made up links to populate the navbar for non-mobile. For mobile set up a useState, toggleMenu, to monitor if the menu is toggled to open or close. Setup conditional rendering of the menu buttons depending on useState value. Laid out basic structure of navigation and open/close menu functionality.

#6. Added in a favicon.ico inside pages/index.js. Created data folder. Created data.jsx inside of it. Created an array of objects containing the data for each navigation link. Imported data into Navbar.jsx and replaced the []'s with the imported links and mapped over them instead. Did more styling to the navbar - replaced icons, changed colors, changed font, changed text positioning when menu is open, and added background effects during menu open as well.

#7. I created Menu.jsx inside of components and extracted the menu portion of the return from Navbar. Then I imported the new component into Navbar and made the same as before. Created hooks folder inside of components. Created NavContext.jsx inside of that and set up a NavbarContext/Navbar.Provider so that I can pass the state about the menu being toggled open or close between the Navbar component and the Menu component from the context instead of occupying both components with redundant state.

#8. The menu functionality was not working correctly so I added another conditional inside of the MobMenu.jsx file which was renamed from Menu and updated around the app. I removed the useContext until this bug was sorted and now will hook up the same functionality using the useContext hook on the next update. Still need to add background affects and change text positioning when MobMenu is open.

#9. Connected the useContext hook and achieved the same functionality as before.

#10. Brought in a minimized photo and set as the bg image for the mobile menu. Brought in and styled GitHub and Twitter icons. Finished mobile menu until final tweaks.

#11. Did lots of styling tweaks to the navbar to make it responsive and correct on mobile, medium and large screens. The Navbar setup is now finished excepting for final touches and connecting the links & connect button.

#12. Did more style changes to Navbar.

#13. Started work on the Hero component. Brought in 3 react icons. Imported the Loader component to use during data fetching. Added in some Hero text and styled. Added in a button type button for mobile to connect wallet. Started set up of the connect button's onClick function connectWallet. Added a radial gradient generated from css.hero as well as a glassmorphism. Added a future component which will be the cryptocard displaying user TX's.

#14. Worked on setting up the cryptocard with hardcoded values/icons. Added a json.config file and set the compiler options to use smart file routing. Created CCard.jsx inside of components and extracted the cryptocard there. Then imported back into the Hero and inserted.

#15. Created Input component inside Hero.jsx. Used it to populate the Hero with multiple input fields inside the return. Set up the initial state for a Loader component. Created a new state to monitor whether isLoading is set to true or not. The render is conditonal with either a loader message or a button. Setup the handleSubmit function used as an onclick inside the conditionally rendered button. Created Input.jsx and moved the form into there before extracting back into the Hero.

#16. Styled Send Now button. Set up Loader component and imported to the hero for use. Brought in an outside loader from spinkit. Brought in a hero image and set as the background. Did some styling adjustments to suit the adjustment.

#17. Created new smartContract folder and cd'd into. npm i hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ether packages. Used Hardhat for the smart contract development to create new setup. Created Payments.sol. Created Payments contract. Created Payment event. Created PaymentStruct to give properties to our payments.

#18. Created a payments array to store all transaction objects. Created addToChain, getAllTXs, and getTXCount functions.

#19. Renamed sample-scripts.js to deploy.js inside of scripts folder. Cleaned up file. Created runMain function. Set up to deploy Payments.sol. Used Ropsten test faucet to acquire some ETH for contract testing. Used Alchemy to set up a testing network. Deleted hardhat.config.js file and recreated for my needs. Deployed to ropsten network using hardhat: npx hardhat run scripts/deploy.js --network ropsten. 

#20.