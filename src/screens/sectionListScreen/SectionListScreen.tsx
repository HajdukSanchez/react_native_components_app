import React from 'react';
import { SectionList, View, Text } from 'react-native';

import { houses } from '../../data/sections.data';
import { HeaderTitle } from '../../components';
import { styles } from './SectionListScreen.styles';

const SectionListScreen = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={houses}
        renderItem={({ item }) => _SectionItem(item)}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => _SectionHeader(title)}
        renderSectionFooter={({ section: { data } }) => _SectionFooter(data.length)}
        stickySectionHeadersEnabled
        ListHeaderComponent={<HeaderTitle title="Section list" withTop={false} />}
        ListFooterComponent={<HeaderTitle title={`Total Sections: ${houses.length}`} />}
      />
    </View>
  );
};

const _SectionHeader = (title: string) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );
};

const _SectionFooter = (numberOfRecords: number) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionFooterText}>Total records: {numberOfRecords}</Text>
    </View>
  );
};

const _SectionItem = (text: string) => {
  return (
    <View style={styles.sectionItem}>
      <Text style={styles.sectionItemText}>{text}</Text>
    </View>
  );
};

export { SectionListScreen };
