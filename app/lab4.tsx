import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import vacationDestinations, { VacationDestination } from '../lib/vacationsDestinations';
import { ActivityIndicator, Image } from 'react-native';

export default function Lab4() {

    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [wikiData, setWikiData] = useState<any>(null);
    const [loading, setLoading] = useState(false);



const handleSelect = async (destination: VacationDestination) => {
  if (selectedId === destination.id) {
    setSelectedId(null);
    setWikiData(null);
    return;
  }

  setSelectedId(destination.id);
  setLoading(true); 

  try {
    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(destination.location)}`
    );
    const data = await response.json();
    setWikiData(data); 
  } catch (error) {
    console.error('Error fetching Wikipedia data:', error);
    setWikiData(null);
  }

  setLoading(false);
};



    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Vacation Destinations</Text>
            {vacationDestinations.map((destination) => (
                <View key={destination.id} style={styles.card}>
                    <TouchableOpacity onPress={() => handleSelect(destination)}>
                        <Text style={styles.location}>{destination.location}</Text>
                    </TouchableOpacity>
                    {selectedId === destination.id && (
                        <View style={styles.details}>
                            <Text>Price: ${destination.price}</Text>
                            <Text>Avg Temp: {destination.average_yearly_temperature}</Text>
                            {loading ? (
                                <ActivityIndicator style={{ marginTop: 10 }} />
                            ) : wikiData ? (
                                <View>
                                    <Text style={{ marginTop: 10 }}>{wikiData.extract}</Text>
                                    {wikiData.thumbnail?.source && (
                                        <Image
                                            source={{ uri: wikiData.thumbnail.source }}
                                            style={{ width: 100, height: 100, marginTop: 10 }}
                                        />
                                    )}
                                </View>
                            ) : null}
                        </View>
                    )}
                </View>
            ))}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        marginBottom: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#e6f2ff',
    },
    location: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    details: {
        marginTop: 10,
    }
});