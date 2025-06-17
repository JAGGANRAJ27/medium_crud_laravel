import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Textarea } from '@headlessui/react';
import { Head,Link, useForm, usePage } from '@inertiajs/react';
import { Label } from '@radix-ui/react-dropdown-menu';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
{
title: 'Edit Post',
href: '/posts',
},
];
export default function EditCreate() {
    const {post} = usePage().props;
    const {data,setData,errors,put} = useForm({
        title : post.title || '',
        content : post.content || '',
    })

    const handleUpdate: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('posts.update',post.id));
    }
return (
<AppLayout breadcrumbs={breadcrumbs}>

    <Head title="Edit Post" />
    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
        <div>
            <Button>
                <Link href={route('posts.index')}>Back to All Posts</Link>
            </Button>
        </div>
        <h1>Edit Your Post Here Buddy!</h1>
        <form onSubmit={handleUpdate}>
            <Input type='text' value={data.title} onChange={(e) => setData('title', e.target.value)} />
            <InputError message={errors.title} className='mt-2' />
            <Textarea className={'w-full border p-2 rounded-xl'} value={data.content} onChange={(e) => setData('content', e.target.value)} ></Textarea>
            <InputError message={errors.content} className='mt-2' />
            <Button type='submit'>Update Post</Button>
        </form>
    </div>
</AppLayout>
);
}
