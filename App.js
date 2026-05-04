import { View, Text, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [like,setLike] = useState(0);
  return (
    <View style={{marginTop: 40, borderRadius: 100, padding: 40, backgroundColor: '#f0f0f0', justifyContent: 'center', borderShadowColor: '#000', elevation: 50}}>
      <Text style={{textAlign:'center', fontWeight:'bold', fontSize: 20}} >Like: {like}</Text>
      <Button 
          title='👍🏾'
          onPress={() => setLike(like + 1)}
        /> 
      <Button 
          title='👎🏾'
          onPress={() => setLike(like - 1)}
        />
      </View>
  );
}
