// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import HomeNav from './HomeNav';
// import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';


// const Bill = () => {
//     // const [parkinslot, setParkingslot] = useState([]);
//     const { username } = useParams();
//     // useEffect(() => {
//     //     axios.get(`http://localhost:8080/Booking/username?username=${username}`)
//     //         .then(response => {
//     //             console.log("API Response:", response.data);
//     //             setParkingslot(response.data.content);
//     //         })
//     //         .catch(error => {
//     //             console.error("Failed to fetch data:", error);
//     //         });
//     // }, [username]);
    

//     return (
//         <PDFViewer style={{ width: '100%', height: '100vh' }}>
//             <Document>
//                 <Page style={styles.page}>
//                     <View style={styles.section}>
//                         <Text>Username: {username}</Text>
//                         <Text>Place: {place}</Text>
//                         <Text>Slots: {slots}</Text>
//                         <Text>Car Number: {carno}</Text>
//                         <Text>Duration: {duration}</Text>
//                         <Text>Amount: {amount}</Text>
//                     </View>
//                 </Page>
//             </Document>
//         </PDFViewer>
//     );
// };

// const styles = StyleSheet.create({
//     page: {
//         flexDirection: 'row',
//         backgroundColor: '#E4E4E4'
//     },
//     section: {
//         margin: 10,
//         padding: 10,
//         flexGrow: 1
//     }
// });

// export default Bill;
