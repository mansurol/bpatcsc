import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
    const [webViewUrl, setWebViewUrl] = useState(null);

    const handlePress = (url) => {
        setWebViewUrl(url);
    };

    const renderWebView = () => {
        if (webViewUrl) {
            return <WebView source={{ uri: webViewUrl }} />;
        }
        return null;
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#060D55" }}>
<StatusBar barStyle="light-content" backgroundColor="#11025F" />
{!webViewUrl ? (
                <View style={styles.container}>
                    {/* Card 1: Student Login */}
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('https://easyresult.easytechsolution.org/student_login.php')}>
                        <Text style={styles.cardText}>Student{'\n'}Login</Text>
                    </TouchableOpacity>

                    {/* Card 2: Teacher Login */}
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('https://easyresult.easytechsolution.org/teacher_login.php')}>
                        <Text style={styles.cardText}>Teacher{'\n'}Login</Text>
                    </TouchableOpacity>

                    {/* Card 3: Online Payment */}
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('https://easyresult.easytechsolution.org/student_payments_view.php')}>
                        <Text style={styles.cardText}>Online{'\n'}Payment</Text>
                    </TouchableOpacity>

                    {/* Card 4: Online Admission */}
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('https://easyresult.easytechsolution.org/admission/adm_school.php')}>
                        <Text style={styles.cardText}>School{'\n'}Admission</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('https://easyresult.easytechsolution.org/admission/admission.php')}>
                        <Text style={styles.cardText}>College{'\n'}Admission</Text>
                    </TouchableOpacity>

                    {/* Card 5: Online Examination */}
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('https://exam.bpatcsc.org/')}>
                        <Text style={styles.cardText}>Online{'\n'}Examination</Text>
                    </TouchableOpacity>

                    {/* Card 6: Career Opportunities */}
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('https://easyresult.easytechsolution.org/career/career_home.php')}>
                        <Text style={styles.cardText}>Career{'\n'}Opportunities</Text>
                    </TouchableOpacity>

                    {/* Card 7: Online Result */}
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('https://easyresult.easytechsolution.org/')}>
                        <Text style={styles.cardText}>Online{'\n'}Result</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => setWebViewUrl(null)} style={styles.backButton}>
                            <Ionicons name="arrow-back" size={24} color="white" />
                            <Text style={styles.headerText}>back</Text>
                        </TouchableOpacity>
                    </View>
                    {renderWebView()}
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', // Arrange children horizontally
        flexWrap: 'wrap', // Wrap cards to the next line if they exceed the width
        justifyContent: 'space-between', 
        
        paddingHorizontal: 20,
        paddingTop: 50, // Add some top padding for better spacing
    },
    card: {
        width: '45%',
        aspectRatio: 1,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        elevation: 3, // for Android
        shadowColor: '#000000', // for iOS
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    header: {
        height: 50,
        backgroundColor: '#11025F',
        justifyContent: 'center',
        alignItems: 'left',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'left',
        paddingHorizontal: 10,
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 5, // Adjust spacing between icon and text
    },
});

export default Home;
