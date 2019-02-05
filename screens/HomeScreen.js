import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import Test from './Test'
import Popular from './popularServices'
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    
    return (
      <View>
      <Popular/>
            <ScrollView  horizontal={false}>
              
                
                <View style={styles.container}>
                  {/* BODY */}
                  <Text>
                  Lorem ipsum dolor sit amet, eam ut soluta salutandi laboramus. Vis inani nonumes id, vis ut tamquam numquam liberavisse, tale regione assentior ei mei. Ex vel mutat molestiae consequat, et cum eros recteque comprehensam, sit consul suscipit menandri ad. Vim alienum accusata in. Per modus persius at.

Ne pri quot corrumpit, duo eripuit aliquando instructior ad. Atqui labitur officiis ad sed, ubique senserit per ne, his et enim melius. Magna posse no ius. His dico partem alienum id, te eos nominavi corrumpit percipitur, id indoctum molestiae usu. No numquam nominavi necessitatibus mel. Habeo sonet vim eu, cum ea voluptua indoctum.

Eu vis nostro liberavisse, ne vide error nec. Cu equidem gubergren vis, eum nonumy recteque an. Ius ne illum dolorum, tantas populo fabellas cu his. Ad tota efficiendi nec. Vix recusabo definitiones at, cum modo audire facilisi ut, et paulo sensibus mediocrem vim.

Sit omnium repudiandae cu, nec nisl scripta electram at. Est ex doming aliquip. Tollit vituperatoribus est et, facer vitae delenit sit no. Mel in harum dicunt, no vis partiendo deseruisse inciderint, pri feugiat menandri ne. Maiestatis argumentum ex sed, at eos dicat repudiare. Ex vis corpora philosophia, dicat vituperatoribus per ne.

Ad ius soluta persius, diam iudico ceteros pro et. Qui fierent eleifend ut. Elitr primis tincidunt pri cu, te eam
duo eripuit aliquando instructior ad. Atqui labitur officiis ad sed, ubique senserit per ne, his et enim melius. Magna posse no ius. His dico partem alienum id, te eos nominavi corrumpit percipitur, id indoctum molestiae usu. No numquam nominavi necessitatibus mel. Habeo sonet vim eu, cum ea voluptua indoctum.

Eu vis nostro liberavisse, ne vide error nec. Cu equidem gubergren vis, eum nonumy recteque an. Ius ne illum dolorum, tantas populo fabellas cu his. Ad tota efficiendi nec. Vix recusabo definitiones at, cum modo audire facilisi ut, et paulo sensibus mediocrem vim.

Sit omnium repudiandae cu, nec nisl scripta electram at. Est ex doming aliquip. Tollit vituperatoribus est et, facer vitae delenit sit no. Mel in harum dicunt, no vis partiendo deseruisse inciderint, pri feugiat menandri ne. Maiestatis argumentum ex sed, at eos dicat repudiare. Ex vis corpora philosophia, dicat vituperatoribus per ne.

Ad ius soluta persius, diam iudico ceteros pro et. Qui fierent eleifend ut. Elitr primis tincidunt pri cu, te eamduo eripuit aliquando instructior ad. Atqui labitur officiis ad sed, ubique senserit per ne, his et enim melius. Magna posse no ius. His dico partem alienum id, te eos nominavi corrumpit percipitur, id indoctum molestiae usu. No numquam nominavi necessitatibus mel. Habeo sonet vim eu, cum ea voluptua indoctum.

Eu vis nostro liberavisse, ne vide error nec. Cu equidem gubergren vis, eum nonumy recteque an. Ius ne illum dolorum, tantas populo fabellas cu his. Ad tota efficiendi nec. Vix recusabo definitiones at, cum modo audire facilisi ut, et paulo sensibus mediocrem vim.

Sit omnium repudiandae cu, nec nisl scripta electram at. Est ex doming aliquip. Tollit vituperatoribus est et, facer vitae delenit sit no. Mel in harum dicunt, no vis partiendo deseruisse inciderint, pri feugiat menandri ne. Maiestatis argumentum ex sed, at eos dicat repudiare. Ex vis corpora philosophia, dicat vituperatoribus per ne.

Ad ius soluta persius, diam iudico ceteros pro et. Qui fierent eleifend ut. Elitr primis tincidunt pri cu, te eam

                  </Text>
               </View>
           </ScrollView>
      </View>
     );
  }

 

  
}



// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: 'blue',
    width: 80+'%',
    justifyContent: 'center'
  }
  
});



