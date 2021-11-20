import * as React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import ListDivider from '../../components/ListDivider';
import SchoolCard, { Conteudo } from '../../components/SchoolCard';
import SearchInput from '../../components/SearchInput';
import SectionHeader from '../../components/SectionHeader';
import { useAuth } from '../../contexts/auth';
import { Container } from './styles';

export default function Home() {
  const { conteudo } = useAuth();

  const schools = React.useRef<Conteudo[]>(conteudo);
  const [filteredSchools, setFilteredSchools] =
    React.useState<Conteudo[]>(conteudo);

  const [search, setSearch] = React.useState('');

  function handleChangeSearch(text: string) {
    if (text === '') {
      setFilteredSchools(schools.current);
      setSearch(text);
    } else {
      setSearch(text);
      const filtered = filteredSchools.filter((school) =>
        school.nomeAplicacao.toLowerCase().includes(text.toLowerCase())
      );

      setFilteredSchools(filtered);
    }
  }

  return (
    <Container>
      <SectionHeader title="Selecione a sessão principal" />

      <SearchInput
        placeholder="Busca"
        value={search}
        onChangeText={handleChangeSearch}
        autoCorrect={false}
      />

      <FlatList
        data={filteredSchools}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SchoolCard data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{
          marginTop: 20,
        }}
      />
    </Container>
  );
}
