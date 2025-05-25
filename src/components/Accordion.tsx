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
        tableate?: boolean;
    }[];
}

interface MarkdownRendererProps {
    html: string;
    tableate?: boolean;
}

export function Accordion({ data }: Props) {
    return (
        <BaseAccordion type="single" collapsible className="w-full">
            {data.map((item, i) => {
                return (
                    <AccordionItem value={`item-${i.toFixed()}`}>
                        <AccordionTrigger><strong><i>{item.title}</i></strong></AccordionTrigger>
                        <AccordionContent><MarkdownRenderer html={item.content} tableate={item.tableate} /></AccordionContent>

                    </AccordionItem>
                );
            })}
        </BaseAccordion>
    );
}

function MarkdownRenderer({ html, tableate }: MarkdownRendererProps) {
    return <div className={tableate ? `max-w-full overflow-x-auto` : ``} dangerouslySetInnerHTML={{ __html: html }} />;
}
