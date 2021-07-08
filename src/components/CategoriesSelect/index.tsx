import React from 'react';

import { ScrollView, Text } from 'react-native';
import { Category, categoryProps } from '../Category';

import { styles } from './styles';

type CategoriesProps = {
    categories: categoryProps[];
}

export function CategoriesSelect({ categories }: CategoriesProps) {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
        >
            {
                categories.map(category => {
                    return (
                        <Category
                            key={category.id}
                            id={category.id}
                            name={category.name} />
                    )
                })
            }
        </ScrollView>
    );
}