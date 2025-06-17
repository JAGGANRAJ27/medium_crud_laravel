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
title: 'Create Post',
href: '/posts',
},
];
export default function PostCreate() {
const {data,setData,errors,post} = useForm({
title: '',
content:"",
})

const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('posts.store'));
}
return (
<AppLayout breadcrumbs={breadcrumbs}>

    <Head title="Create Post" />
    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
        <div>
            <Button>
                <Link href={route('posts.index')}>Back to All Posts</Link>
            </Button>
        </div>
        <h1>Create Your New Post Here Buddy!</h1>
        <form onSubmit={submit} className='space-y-6'>
            <Label>Post Title</Label>
            <Input type="text" name="title" id='name'  autoComplete='title' placeholder='Post Title'
                value={data.title} onChange={(e)=> setData('title', e.target.value)} />
            <InputError message={errors.title} className='mt-2' />
            <Label>Post Body</Label>
            <Textarea className={'w-full border p-2 rounded-xl'} name="body" id='body'  autoComplete='body'
                placeholder='Post Body' value={data.content} onChange={(e)=> setData('content', e.target.value)} ></Textarea>
            <InputError message={errors.content} className='mt-2' />
            <Button type='submit'>Create Post</Button>
        </form>
    </div>
</AppLayout>
);
}
