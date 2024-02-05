'use client'
import React, { useEffect, useState } from 'react';
import { getUsers } from '@/utils/getUsers';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getUsers();
                setUsers(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
  return (
    <div className='w-6/12 mx-auto mt-4'>
    {users.map((user, idx) => (
        <div  
        key={idx}
         className="flex items-center justify-between gap-2  border border-slate-300 rounded-xl mb-4 text-2xl p-4">
            <div className="flex items-center gap-3">
            <p>{idx+1}.</p>
            <p className="uppercase text-red-500">{user?.name}</p>
            </div>
           <p>{user?.number}</p>
        </div>
    ))}
</div>
  )
}

export default Users