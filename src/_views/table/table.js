import * as React from 'react';
import {View} from 'react-native';
import {Appbar, DataTable} from 'react-native-paper';
import _ from 'lodash';
import {CComponent} from '../../_components';
import {DrawerActions} from '@react-navigation/native';

class TableScreen extends CComponent {
  render() {
    const {navigation} = this.props;
    return (
      <>
        <Appbar.Header>
          <Appbar.Action
            icon="menu"
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}
          />
          <Appbar.Content title="Table" />
        </Appbar.Header>
        <View
          style={{
            flex: 1,
            padding: 10,
            alignItems: 'center',
          }}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Dessert</DataTable.Title>
              <DataTable.Title numeric>Calories</DataTable.Title>
              <DataTable.Title numeric>Fat</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Frozen yogurt</DataTable.Cell>
              <DataTable.Cell numeric>159</DataTable.Cell>
              <DataTable.Cell numeric>6.0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
              <DataTable.Cell numeric>237</DataTable.Cell>
              <DataTable.Cell numeric>8.0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Pagination
              page={1}
              numberOfPages={3}
              onPageChange={(page) => {
                console.log(page);
              }}
              label="1-2 of 6"
            />
          </DataTable>
        </View>
      </>
    );
  }
}

export default TableScreen;
