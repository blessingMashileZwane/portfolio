import {
    Accordion as BaseAccordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
    data: {
        title: string;
        description: string;
        content: any;
    }[];
}

interface MarkdownRendererProps {
    html: string;
}

export function Accordion({ data }: Props) {
    return (
        <BaseAccordion type="single" collapsible className="w-full">
            {data.map((item, i) => {
                return (
                    <AccordionItem value={`item-${i.toFixed()}`}>
                        <AccordionTrigger><strong><i>{item.title}</i></strong></AccordionTrigger>
                        <AccordionContent><MarkdownRenderer html={item.content} /></AccordionContent>

                    </AccordionItem>
                );
            })}
        </BaseAccordion>
    );
}

function MarkdownRenderer({ html }: MarkdownRendererProps) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
