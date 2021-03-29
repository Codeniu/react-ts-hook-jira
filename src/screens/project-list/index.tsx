import { useEffect, useState } from 'react';
import { cleanObject, useDebounce, useMount } from 'utils';
import { useHttp } from 'utils/http';
import { List } from './list';
import { SearchPanel } from './search-panel';

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: '',
    });
    const debouncedParam = useDebounce(param, 2000);

    const [list, setList] = useState([]);
    const [users, setUsers] = useState([]);
    const client = useHttp();

    useEffect(() => {
        client('projects', { data: cleanObject(debouncedParam) }).then(setList);
    }, [client, debouncedParam]);

    useMount(() => {
        client('users').then(setUsers);
    });

    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam} />
            <List users={users} list={list} />
        </div>
    );
};
