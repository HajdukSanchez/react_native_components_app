import React, { useContext } from 'react';
import { SectionList, View, Text } from 'react-native';

import { houses } from '../../data/sections.data';
import { HeaderTitle } from '../../components';
import { styles } from './SectionListScreen.styles';
import { ThemeContext } from '../../context/themeContext/ThemeContext';

const SectionListScreen = () => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <SectionList
        sections={houses}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => _SectionItem(item, colors.text, colors.primary)}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => _SectionHeader(title, colors.text, colors.background)}
        renderSectionFooter={({ section: { data } }) => _SectionFooter(data.length, colors.text, colors.background)}
        stickySectionHeadersEnabled
        ListHeaderComponent={<HeaderTitle title="Section list" withTop={false} />}
        ListFooterComponent={<HeaderTitle title={`Total Sections: ${houses.length}`} />}
      />
    </View>
  );
};

const _SectionHeader = (title: string, textColor: string, sectionBackgroundColor: string) => {
  return (
    <View style={{ ...styles.section, backgroundColor: sectionBackgroundColor }}>
      <Text style={{ ...styles.sectionHeaderText, color: textColor }}>{title}</Text>
    </View>
  );
};

const _SectionFooter = (numberOfRecords: number, textColor: string, sectionBackgroundColor: string) => {
  return (
    <View style={{ ...styles.section, backgroundColor: sectionBackgroundColor }}>
      <Text style={{ ...styles.sectionFooterText, color: textColor }}>Total records: {numberOfRecords}</Text>
    </View>
  );
};

const _SectionItem = (text: string, textColor: string, borderColor: string) => {
  return (
    <View style={{ ...styles.sectionItem, borderLeftColor: borderColor }}>
      <Text style={{ ...styles.sectionItemText, color: textColor }}>{text}</Text>
    </View>
  );
};

export { SectionListScreen };
